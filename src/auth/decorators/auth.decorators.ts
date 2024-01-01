import { UseGuards, applyDecorators } from "@nestjs/common";
import { Role } from "../role.enum";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuardTsGuard } from "../guard/roles.guard";

export function Auth(role: Role){
    return applyDecorators(
    Roles(role),
    UseGuards(AuthGuard, RolesGuardTsGuard)
    )
}