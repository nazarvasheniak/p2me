import { extend } from "vee-validate";
import { required, alpha_dash, confirmed, numeric, digits, email } from "vee-validate/dist/rules";

extend('required', {...required, message: "This field is required"});
extend('email', {...email, message: "This field is email"});
extend('alpha_dash', {...alpha_dash, message: "The field may contain alpha-numeric characters as well as dashes and underscores"});
extend('confirmed', {...confirmed, message: "The  field confirmation does not match"});
extend('numeric', {...numeric, message: "The field may only contain numeric characters"});
extend('digits', {...digits, message: "The field must be numeric and exactly contain 3 digits"});


