Feature: The Internet Guinea Pig Website

    Scenario Outline: As a user, I can log into the secure area

        # Given Open the Url
        # Then See the Header

        Given User open the browser and load the url <homepage>
        Then User should see a header with text <headerText>

        Examples:
            | homepage                            | headerText              |
            | https://the-internet.herokuapp.com/ | Welcome to the-internet |