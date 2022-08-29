import java.io.*;
import java.util.*;

public class Copy {
    public static void main(String args[]) throws IOException {
        Scanner scan = new Scanner(System.in);
        System.out.println("1.For copying the file ");
        System.out.println("2. for creating the new file ");
        System.out.println("3. for deleting the file");
        System.out.println("4.for wring in file");
        int input = scan.nextInt();
        switch (input) {
            case 1:

                FileInputStream in = null;
                FileOutputStream out = null;
                try {
                    in = new FileInputStream("one.txt");
                    out = new FileOutputStream("two.txt");
                    int c;
                    while ((c = in.read()) != -1) {
                        out.write(c);
                    }
                    System.out.println("Copy successfull");
                } finally {
                    if (in != null) {
                        in.close();
                    }
                    if (out != null) {
                        out.close();
                    }

                }
                break;
            case 2:
                try {
                    File file = new File("new.txt");

                    if (file.createNewFile()) {
                        System.out.println("File creation succcessfulll");

                    } else {
                        System.out.println("failed");

                    }
                } catch (IOException e) {
                    System.out.println("An error occurred while creation");
                }
                break;
            case 3:

                File file2 = new File("delete.txt");
                if (file2.delete()) {
                    System.out.println("File deleted successfully");
                } else {
                    System.out.println("Failed to delete the file");
                }

            case 4:
                try {
                    File file = new File("new.txt");
                    file.createNewFile();
                    FileWriter myWriter = new FileWriter(file);
                    myWriter.write("from java program");
                    myWriter.close();
                    System.out.println("Successfully wrote to the file.");
                } catch (IOException e) {
                    System.out.println("An error occurred.");
                    e.printStackTrace();
                }
            default:
                break;
        }

    }

}
