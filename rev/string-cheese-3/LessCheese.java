interface LessCheese {
  static void main(String[] args) {
    System.out.print("encrypted flag pls?\n>");

    String input = System.console().readLine();
    char[] decrypted = new char[input.length()];
    for (int i = 0; i < input.length(); i++) {
      decrypted[i] = (char)((int) input.charAt(i) ^ 0b00010101);
    }
    String decryptedInput = new String(decrypted);

    System.out.println(switch (decryptedInput) {
      case "vlwpgnfagtbwpggl8vgptx8v}ppfp8wtrpyh" -> "omg you found the flag!";
      default -> "that is not the flag >:(";
    });
  }
}
