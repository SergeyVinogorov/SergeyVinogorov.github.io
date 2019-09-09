package test_calculator;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Main {
		public static void main(String[] args) throws IOException {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			System.out.println("Input: ");
			String name = br.readLine();
			getNumber.splitString(name);
			makeNumber.converter();
			checkRightNumber.rangeNumber(makeNumber.first);
			checkRightNumber.rangeNumber(makeNumber.second);
			arifmetic.checkArifmetic();
	    }
	}
