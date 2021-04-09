Feature: Adicionar comentário para invocador

  Scenario: Adicionar comentário para um usuário
    Given eu busquei pelo jogador Soonlorcross
    When eu adiciono um comentário
    Then o comentário deverá ser exibido