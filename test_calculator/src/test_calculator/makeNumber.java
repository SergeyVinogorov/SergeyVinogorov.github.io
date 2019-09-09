package test_calculator;

public class makeNumber {
	static int first;
	static int second;
	public static int parser (String someString) {
		int result = Integer.parseInt(someString);
		return result;
	}
	public static void converter () {
		try {
			first = parser(getNumber.firstNumber);
		}catch(Exception e){
			checkRoman(getNumber.firstNumber);
		}
		try {
			second = parser(getNumber.secondNumber);
		}catch(Exception e) {
			System.out.print("second number is not look like correct number");
		}
		
	}
	public static void checkRoman (String roma) {
		roma.toUpperCase();
		int j = 0;
		char firstLetter = roma.charAt(j);
		char parametrs [] = {'I', 'X', 'V'};
		for (int i=0; i <= parametrs.length; i++) {
			if (firstLetter == parametrs[i]) {
				romanNumerals rightRoman = new romanNumerals(roma);
			}else {
				System.out.println("first number is not look like correct number");
			}
		}
	}
}