package test_calculator;

public class checkRightNumber {
	public static boolean rangeNumber (int element) {
		if (element >= 1 & element <= 10 & element % 1 == 0) {
			return true;
		}else {
			throw new RuntimeException("That not a correct diapasons of number");
		}
	}
}
