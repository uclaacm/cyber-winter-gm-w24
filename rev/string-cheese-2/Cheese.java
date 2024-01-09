interface Cheese {
  static void main(String[] args) {
    System.out.print("flag pls?\n>");
    System.out.println(switch (System.console().readLine()) {
      case "cyber{american-cheese-is-not-real}" -> "omg you found the flag!";
      default -> "that is not the flag >:(";
    });
  }
}
