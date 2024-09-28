import { Body, Controller, Post,Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../common/role.enum';
import { Auth } from './decorators/auth.decorators';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

//moverlo a su propia carpeta
/*
interface RequestWithUser extends Request{
    user : { email: string, role : string } 
}
*/
@ApiTags('auth')
@Controller('auth')
export class AuthController {

constructor(
    private readonly authSservice: AuthService
){}

//@Auth(Role.ADMIN)
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

    profile(
       @ActiveUser() user : UserActiveInterface
    ){
        console.log(user )

        return "de prueba profile"
    }

    @Get('prueba')

    prueba(
       @ActiveUser() user : UserActiveInterface
    ){
        console.log(user )

        return "de prueba usuarios"
    }
}
