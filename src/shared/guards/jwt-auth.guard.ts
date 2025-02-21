import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AUTH_STRING } from '../utils/string.utils';
import { User } from '@/modules/users/entities/user.entity';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly secret: string;

  constructor(private readonly jwtService: JwtService) {
    this.secret = process.env.JWT_SECRET || 'secretKey';
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (!token) {
      throw new UnauthorizedException(AUTH_STRING.ERROR.UNAUTHORIZED);
    }

    try {
      const payload = this.jwtService.verify(token.replace('Bearer ', ''), {
        secret: this.secret,
      });
      const userId = payload.sub;
      const user = await User.findOneBy({ id: userId });
      if (!user) {
        throw new UnauthorizedException(AUTH_STRING.ERROR.NOT_AUTHENTICATED);
      }
      request.user = user;
      return true;
    } catch {
      throw new UnauthorizedException(AUTH_STRING.ERROR.UNAUTHORIZED);
    }
  }
}
