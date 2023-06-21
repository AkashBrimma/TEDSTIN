Feature: Practice

    Scenario Outline: Test chai form
        Given I am on practice page "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm"
        Then I validat page header "Selenium - Automation Practice Form"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> years <yrs> favorite chai <Profession> and reason <Flavours>
        And I select continent <continents> and commands <command>
        And I click on submit button
        # Then I validat page header "We're passionate about tea."

        Examples:
            | fname | lname  | gender | yrs | Profession        | Flavours           | continents | command       |
            | Emma  | watson | Female | 6   | Automation Tester | Selenium Webdriver | Europe     | Wait Commands |