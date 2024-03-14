Feature: Register

  @positive_register
  Scenario: As a user, I can register account
    Given User register on the register page
    When User register with <nameshop> and <email> and <password>
    Then User should enter into login page and see login page title <message>

    Examples: 
      | nameshop         | email                   | password       | message                   |
      | cek toko sebelah | cektokosebelah@mail.com | cektokosebelah | Toko berhasil didaftarkan |

  @negative_register
  Scenario: As a user, I can't register account
    Given User register on the register page
    When User cannot register with null data <nameshop> and <email> and <password>
    Then User shouldn't enter into login page and see alert name not null<message>

    Examples: 
      | nameshop | email | password | message                           |
      |          |       |          | "name" is not allowed to be empty |

  @negative_register
  Scenario: As a user, I can't register account
    Given User register on the register page
    When User cannot register with valid <nameshop> and null <email> and valid <password>
    Then User shouldn't enter into login page and see alert email not null<message>

    Examples: 
      | nameshop    | email | password   | message                            |
      | berkah jaya |       | berkahjaya | "email" is not allowed to be empty |

  @negative_register
  Scenario: As a user, I can't register account
    Given User register on the register page
    When User cannot register with valid <nameshop> and valid <email> and null <password>
    Then User shouldn't enter into login page and see alert password not null<message>

    Examples: 
      | nameshop    | email               | password | message                               |
      | berkah jaya | berkahjaya@mail.com |          | "password" is not allowed to be empty |
