import { Body, Controller, Post,Get,Request, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { Role } from './role.enum';
import { Auth } from './decorators/auth.decorators';

//moverlo a su propia carpeta
interface RequestWithUser extends Request{
    user : { email: string, role : string } 
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {

constructor(
    private readonly authSservice: AuthService
){}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto,

    ){
        return this.authSservice.register(registerDto)
    }

    @Post('login')
    login(
        @Body()
        loguinDto: LoginDto,

    ){
        return this.authSservice.login(loguinDto)
    }

    @Get('profile')
    @Auth(Role.USER)

    profile(
        @Req() req: RequestWithUser

    ){
        return req.user
    }
}
