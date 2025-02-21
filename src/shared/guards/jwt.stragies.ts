import { UsersService } from '@/modules/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { USERS_STRING } from '../utils/string.utils';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      // Extract the JWT from the Authorization header as a Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // Use a secret from your environment or fallback value
      secretOrKey: process.env.JWT_SECRET || 'secretKey',
    });
  }

  // This method is called after the token is verified.
  // The returned object is automatically attached to the request as "user".
  async validate(payload: any) {
    const user = await this.usersService.findOneById(payload.sub);
    if (!user) {
      throw new UnauthorizedException(USERS_STRING.ERROR.USER_NOT_FOUND);
    }
    // Optionally, you can add extra properties to the user object here.
    return user;
  }
}
