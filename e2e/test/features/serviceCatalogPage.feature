Feature: Home page test scenarios

  @smoke
  Scenario: I should login
    Given I open the page
    Then I should login as "T-TMNAHQ-chofer01@TOYOTA1.ONMICROSOFT.COM" and "Fujka$745ahbhb12"

  @smoke
  Scenario: Validation of Service Catalog
    When Eventually I click "service-catalog -> serviceCatalogMenuButton"
    Then I should check "service-catalog -> title" is displayed
    Then I should check "service-catalog -> typeDropDown" is displayed
    Then I should check "service-catalog -> typeDropDown" is clickable
    When Eventually I click "service-catalog -> typeDropDown"
    Then I should check "service-catalog -> allFilter" is clickable
    Then I should check "service-catalog -> docFilter" is clickable
    Then I should check "service-catalog -> serviceFilter" is clickable
    Then I should check "service-catalog -> systemFilter" is clickable
    Then I should check "service-catalog -> websiteFilter" is clickable

  @smoke
  Scenario: Validation of Service Catalog Search field
    Given I open the page "service-catalog -> url"
    When I enter "ace-tech-docs" on "service-catalog -> searchInput"
    Then I should see "ace-tech-docs" text on "service-catalog -> firstComponent" field
    When Eventually I click "service-catalog -> firstComponent"
    Then I should navigate to "https://backstage-dev.acedev.4poc.net/catalog/default/component/ACE-TECH-DOCS" page
    When Eventually I click "service-catalog -> backToServiceCatalog"
    Then I should navigate to "service-catalog -> url" page
    When Eventually I click "service-catalog -> createComponentButton"
    Then I should navigate to "https://backstage-dev.acedev.4poc.net/create" page

  @smoke
  Scenario: Validation of Service Catalog components with sorting by (name, owner, description, lifecycle)
    Then I get last component "service-catalog -> allComponentsMockUrl" and change name to empty string
    When Eventually I click "service-catalog -> nameSortButton"
    Then I should see "service-catalog -> firstComponent" field is empty

    Then I get last component "service-catalog -> allComponentsMockUrl" and change owner to empty string
    When Eventually I click "service-catalog -> ownerSortButton"
    Then I should see "service-catalog -> firstComponentOwnerColumn" field is empty

    Then I get last component "service-catalog -> allComponentsMockUrl" and change lifecycle to empty string
    When Eventually I click "service-catalog -> lifecycleSortButton"
    Then I should see "service-catalog -> firstComponentLifecycleColumn" field is empty

    Then I get last component "service-catalog -> allComponentsMockUrl" and change description to empty string
    When Eventually I click "service-catalog -> descriptionSortButton"
    Then I should see "service-catalog -> firstComponentDescriptionColumn" field is empty

  @smoke
  Scenario: Validation of Service Catalog components with filtering by (documentation, service, system, website)
    Given I open the page "service-catalog -> url"

    When Eventually I click "service-catalog -> typeDropDown"
    When Eventually I click "service-catalog -> docFilter"
    Then I should check all components type when components filtered by documentation

    When Eventually I click "service-catalog -> typeDropDown"
    When Eventually I click "service-catalog -> serviceFilter"
    Then I should check all components type when components filtered by service

    When Eventually I click "service-catalog -> typeDropDown"
    When Eventually I click "service-catalog -> systemFilter"
    Then I should check all components type when components filtered by system

    When Eventually I click "service-catalog -> typeDropDown"
    When Eventually I click "service-catalog -> websiteFilter"
    Then I should check all components type when components filtered by website

  @smoke
  Scenario: Validation of Service Catalog service's icons
    Given I open the page "service-catalog -> url"
    When I click "service-catalog -> firstComponentGithubIcon"
    Then I should navigate to "github" page
    Then I should switch Window to "service-catalog -> url"
    When I click "service-catalog -> firstComponentEditIcon"
    Then I should navigate to "github" page
    Then I should switch Window to "service-catalog -> url"
    When Eventually I click "service-catalog -> firstComponentStarIcon"
    Then I should check "service-catalog -> firstComponentStarIcon" color is "#f3ba37"
    When Eventually I click "service-catalog -> firstComponentStarIcon"
