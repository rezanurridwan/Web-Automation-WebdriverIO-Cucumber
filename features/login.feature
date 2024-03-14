Feature: The login of kasirAja

  @positive_login
  Scenario: As a user, I can login into the homepage
    Given User want to login
    When User login with input data <email> and <password> valid

    Examples: 
      | email                   | password       |
      | cektokosebelah@mail.com | cektokosebelah |

  @negative_login
  Scenario: As a user, I cannot login into the homepage
    Given User login on the login page
    When User login with input null data <email> and <password>
    Then User should see alert null data <message>

    Examples: 
      | email | password | message                            |
      |       |          | "email" is not allowed to be empty |

  @negative_login
  Scenario: As a user, I cannot login into the homepage
    Given User login on the login page
    When User login with input data <email> valid and null <password>
    Then User should see alert password null data <message>

    Examples: 
      | email               | password | message                               |
      | berkahjaya@mail.com |          | "password" is not allowed to be empty |

  @negative_login
  Scenario: As a user, I cannot login into the homepage
    Given User login on the login page
    When User login with invalid credentials data <email> and <password>
    Then User should see alert credentials invalid <message>

    Examples: 
      | email                    | password   | message                            |
      | mahakaaletronik@mail.com | makahajaya | Kredensial yang Anda berikan salah |
