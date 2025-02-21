import { User } from '@/modules/users/entities/user.entity';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    if (!requiredPermissions) return true;

    const { user }: { user: User } = context.switchToHttp().getRequest();
    const userPermissions = user.role?.permissions.split(',');
    return (
      userPermissions?.some((perm: string) =>
        requiredPermissions.includes(perm),
      ) ?? false
    );
  }
}
