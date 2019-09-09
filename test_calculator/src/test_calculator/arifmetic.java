package test_calculator;

public class arifmetic {
	static int result;
	public static void checkArifmetic () {
		if (getNumber.expression.contains("+")) {
			result = makeNumber.first + makeNumber.second;
			System.out.println("Output: " + "\n" + result);
		} else if (getNumber.expression.contains("-")) {
			result = makeNumber.first - makeNumber.second;
			System.out.println("Output: "  + "\n" + result);
		}else if (getNumber.expression.contains("*")) {
			result = makeNumber.first * makeNumber.second;
			System.out.println("Output: "  + "\n" + result);
		}else if (getNumber.expression.contains("/")) {
			result = makeNumber.first / makeNumber.second;
			System.out.println("Output: "  + "\n" + result);
		}
	}
}
