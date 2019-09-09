package test_calculator;

public class arifmetic {
	static int result;
	public static void checkArifmetic() {
		boolean isNumberRoman = makeNumber.firstNumberRoman == true & makeNumber.secondNumberRoman == true;
		if (getNumber.expression.contains("+")) {
			result = makeNumber.first + makeNumber.second;
			
			if (isNumberRoman) {
				System.out.println("Output: " + "\n" + romanNumerals.toString(result));
			}else {
				System.out.println("Output: " + "\n" + result);
			}
		} else if (getNumber.expression.contains("-")) {
			result = makeNumber.first - makeNumber.second;
			
			if (isNumberRoman) {
		        if (result < 1)
			         throw new NumberFormatException("Value of RomanNumeral must be positive.");
				System.out.println("Output: " + "\n" + romanNumerals.toString(result));
			}else {
				System.out.println("Output: " + "\n" + result);
			}
		}else if (getNumber.expression.contains("*")) {
			result = makeNumber.first * makeNumber.second;
			
			if (isNumberRoman) {
				System.out.println("Output: " + "\n" + romanNumerals.toString(result));
			}else {
				System.out.println("Output: " + "\n" + result);
			}
		}else if (getNumber.expression.contains("/")) {
			result = makeNumber.first / makeNumber.second;
			
			if (isNumberRoman) {
				System.out.println("Output: " + "\n" + romanNumerals.toString(result));
			}else {
				System.out.println("Output: " + "\n" + result);
			}
		}else {
			System.out.println("Output: " + "\n" + result);
		}
	}
}
