@smoke
Feature: Home page test scenarios

  Scenario: I should login
    Given I open the page
    Then I should login as "T-TMNAHQ-chofer01@TOYOTA1.ONMICROSOFT.COM" and "Fujka$745ahbhb12"
    Then I should navigate to "https://backstage-dev.acedev.4poc.net/welcome" page

  Scenario: Validation of home page
    Then I should check "home -> title" is displayed
    Then I should check "home -> publishedBlueprintsTitle" is displayed
    Then I should check "home -> notificationsTitle" is displayed
    Then I should check "home -> newsAndUpdatesTitle" is displayed
    Then I should check "home -> quickLinksTitle" is displayed
    Then I should check "home -> awsAnnouncementsTitle" is displayed
    Then I should check "home -> azureAnnouncementsTitle" is displayed
    Then I should check "home -> latestTrainingTitle" is displayed
    Then I should check "home -> latestPostsTitle" is displayed


