import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
interface RequestWithUser extends Request {
    user: {
        email: string;
        role: string;
    };
}
export declare class AuthController {
    private readonly authSservice;
    constructor(authSservice: AuthService);
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    login(loguinDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(req: RequestWithUser): {
        email: string;
        role: string;
    };
}
export {};
