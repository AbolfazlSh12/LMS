import { UserRo } from 'src/users/dto/user.ro';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginRo {
    @ApiProperty()
    public readonly user: UserRo;
    
    @ApiProperty()
    public readonly token: string;

}