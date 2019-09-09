package test_calculator;

public class getNumber {
	static int arifmeticIndex;
	static String firstNumber;
	static String secondNumber;
	static String expression;
	public static void splitString(String line) {
		String someLine = line.trim();
		someLine = someLine.replaceAll(" ", "");
		if (someLine.contains("+")) {
			expression = "+";
			arifmeticIndex = someLine.indexOf('+');
		}else if (someLine.contains("-")) {
			expression = "-";
			arifmeticIndex = someLine.indexOf('-');
		}else if (someLine.contains("*")) {
			expression = "*";
			arifmeticIndex = someLine.indexOf('*');
		}else if (someLine.contains("/")) {
			expression = "/";
			arifmeticIndex = someLine.indexOf('/');
		}else {
			throw new RuntimeException("That expression is not correct");
		}
		
		secondNumber = someLine.substring(arifmeticIndex + 1);
		firstNumber = someLine.substring(0, arifmeticIndex);
		
	}
}
