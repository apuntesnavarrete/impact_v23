import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const ActiveUser = createParamDecorator(
    (data : unknown, ctx: ExecutionContext) =>{
        const req = ctx.switchToHttp().getRequest() 
        return req.user
    }
) 