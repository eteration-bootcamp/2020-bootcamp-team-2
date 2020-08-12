package com.company;
import java.util.Scanner;
import java.lang.Math;

public class CodeSmellExample {
    //Bad Code
    public double radiusBadExample(int circumference){
        return circumference / (2.0 * 3.14);

    }
    //Clean Code
    public double radiusCleanExample(int circumference){
        return circumference / (2.0 * Math.PI);

    }

    public static void main(String args[]){


        //Bad Code
        double gr,mgr,fgr;
        Scanner in=new Scanner(System.in);
        System.out.println("Enter your mgr"); mgr=in.nextDouble();
        System.out.println("Enter your fgr"); fgr=in.nextDouble();
        gr =mgr*0.4 + fgr*0.6;
        if (gr>=60) {System.out.println("Pass");}
        else {System.out.println("Average:"+gr + "\n Fail");}


        //Clean Code
        double gradeAverage,midtermGrade,finalGrade;
        Scanner input=new Scanner(System.in);
        System.out.println("Enter your midterm grade =");
        midtermGrade=input.nextDouble();
        System.out.println("Enter your final grade =");
        finalGrade=input.nextDouble();
        gradeAverage =midtermGrade*0.4 + finalGrade*0.6;
        if (gradeAverage>=60) {
            System.out.println("Average Grade:"+gradeAverage + "\n Pass");
        }
        else
        {
            System.out.println("Average Grade:"+gradeAverage + "\n Fail");
        }

    }

}
