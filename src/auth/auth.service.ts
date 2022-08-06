import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Im a signin' };
  }

  signup() {
    return { msg: 'Im a signup' };
  }
}
