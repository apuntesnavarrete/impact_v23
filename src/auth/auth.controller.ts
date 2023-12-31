import { Body, Controller, Post,Get, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

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
    @UseGuards(AuthGuard)

    profile(
        @Request() req

    ){
        return req.user
    }
}
