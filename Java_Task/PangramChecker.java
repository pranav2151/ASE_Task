public class PangramChecker {
    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        sentence = sentence.toLowerCase();

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if ('a' <= c && c <= 'z') {
                alphabet[c - 'a'] = true;
            }
        }

        for (boolean letter : alphabet) {
            if (!letter) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);
        System.out.println("Is it a pangram? " + isPangram);
    }
}
