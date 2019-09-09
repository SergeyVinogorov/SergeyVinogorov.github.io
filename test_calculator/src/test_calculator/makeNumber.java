package test_calculator;

public class makeNumber {
	static int first;
	static int second;
	static boolean firstNumberRoman = false;
	static boolean firstNumberArabic = false;
	static boolean secondNumberRoman = false;
	static boolean secondNumberArabic = false;
	
	public static int parser(String someString) {
		
		int result = Integer.parseInt(someString);
		return result;
	}
	
	public static void converter() {
		try {
			first = parser(getNumber.firstNumber);
			firstNumberArabic = true;
		}catch(Exception e){
			checkRomanFirst(getNumber.firstNumber);
		}
		try {
			second = parser(getNumber.secondNumber);
			secondNumberArabic = true;
		}catch(Exception e) {
			checkRomanSecond(getNumber.secondNumber);
		}
		
	}
	public static void checkRomanFirst (String roma) {
		roma = roma.toUpperCase();
		int j = 0;
		char firstLetter = roma.charAt(j);
		char parametrs [] = {'I', 'X', 'V'};
		for (int i=0; i <= parametrs.length - 1; i++) {
			if (firstLetter == parametrs[i]) {
				firstNumberRoman = true;
				romanNumerals.convertionRomanToArabicFirst(roma);
				return;
			}else {
				System.out.println("first number is not look like correct number");
			}
		}
	}
	public static void checkRomanSecond (String roma) {
		roma = roma.toUpperCase();
		int j = 0;
		char firstLetter = roma.charAt(j);
		char parametrs [] = {'I', 'X', 'V'};
		for (int i=0; i <= parametrs.length - 1; i++) {
			if (firstLetter == parametrs[i]) {
				secondNumberRoman = true;
				romanNumerals.convertionRomanToArabicSecond(roma);
				return;
			}else {
				System.out.print("second number is not look like correct number");
			}
		}
	}
}