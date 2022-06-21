import { Provider, ValueOrPromise } from "@loopback/core";
import { service } from "@loopback/core";
import { UserSignupFn } from "@sourceloop/authentication-service";
import { UserDto } from '../models/user.dto';
import { UserOpsService } from '../services/user-ops.service';
export class LocalSignupProvider implements Provider<UserSignupFn<UserDto, UserDto>> {
    constructor(@service(UserOpsService)
    private readonly userops: UserOpsService) {

    }
    value(): ValueOrPromise<UserSignupFn<UserDto, UserDto>> {
        return async (model, token) => this.userops.createUser(model, {})
    }
}