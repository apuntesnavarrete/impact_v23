import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authSservice;
    constructor(authSservice: AuthService);
    register(registerDto: RegisterDto): string;
    login(): string;
}
