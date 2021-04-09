Feature: Buscar usuário

  Scenario: Realizar busca por usuário válido
    Given eu acesso a home da aplicação
    When realizo uma busca pelo usuário Soonlorcross
    Then eu deverei ser redirecionado para a tela de detalhes de invocador
    And o meu nome de invocador deverá ser exibido

  Scenario: Realizar Busca por usuário não existente
    Given eu acesso a home da aplicação
    When realizo uma busca pelo usuário spomfdpsomfpsdo
    Then eu deverei continuar na tela inicial
    And o campo de busca deverá exibir uma borda vermelha