import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
	let errors={}

	if(Validator.isNull(data.username)){
		errors.username = "This Field is Required"
	}

	if(Validator.isNull(data.password)){
		errors.password = "This Field is Required"
	}

	

	return{
		errors,
		isValid: isEmpty(errors)
	}
}