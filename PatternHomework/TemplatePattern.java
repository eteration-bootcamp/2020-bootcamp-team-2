package com.company;

abstract class FrontendPage{
    public final void displayPage(){
        displayNavbar();
        displayBody();
        displayFooter();
    }

    public void displayNavbar(){
        System.out.println("NAVBAR");
    }

    public abstract void displayBody();

    public void displayFooter(){
        System.out.println("FOOTER");
    }


}

class HomePage extends FrontendPage{


    @Override
    public void displayBody() {
        System.out.println("HOME PAGE BODY");
    }
}

class ProfilePage extends FrontendPage{
    public void displayBody(){
        System.out.println("PROFILE PAGE BODY");
    }
}

public class TemplatePattern{
    public static void main(String[] args) {
        FrontendPage homePage = new HomePage();
        FrontendPage profilePage = new ProfilePage();

        System.out.println("*****HOME*******");
        homePage.displayPage();
        System.out.println();
        System.out.println("*****PROFILE*****");
        profilePage.displayPage();

    }
}
