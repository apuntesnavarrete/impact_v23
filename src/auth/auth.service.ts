import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService

    ){}

   async register({name , email, password}: RegisterDto){

    const user =  await this.userService.findOnebyEmail(email);

    if(user){
        throw new BadRequestException('User already exist')
    }



   
        return  await this.userService.create({
            name,
             password: await bcryptjs.hash(password,10), 
             email})
    }

    async login({ email, password}:LoginDto){

        const user =  await this.userService.findOnebyEmail(email);
    
        if(!user){
            throw new UnauthorizedException('email is wrong')
        }

        const isPassworrdValid =  await bcryptjs.compare(password, user.password)

        if(!isPassworrdValid){
            throw new UnauthorizedException('pasword is wrong')
        }

        const payload = { email: user.email }
        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            email
        }
    }

}
