import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("""
                      )  (
                     (   ) )
                      ) ( (
                   (_______)_
                 .-'---------| \s
                ( C|/\\/\\/\\/\\/|
                 '-./\\/\\/\\/\\/|
                   '_________'
                    '-------' 
                """);
        System.out.println("Welcome to the Cyber Cafe! Please enter your membership ID number: ");
        String i = input.nextLine();
        while (!i.equals(new StringBuilder().append("74935-68723-KCIRBYC").reverse().toString())) {
            System.out.println("Incorrect. Please try again: ");
            i = input.nextLine();
        }
        System.out.println("Welcome! The flag is cyber{" + i + "}");
    }
}