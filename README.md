# Padrão de Iterador (Iterator Pattern)

O Padrão Iterator é uma técnica de design empregada para proporcionar um método consistente e eficaz de percorrer uma sequência de elementos, sem revelar os detalhes internos da estrutura de dados. Ele desvincula a lógica de iteração, possibilitando ao código cliente interagir com os elementos sem a necessidade de se preocupar com a implementação interna da coleção.

Apesar deste padrão ser de grande utilidade, em linguagens de alto nível como o JavaScript, ele raramente é usado de maneira explícita, pois essas linguagens geralmente proporcionam abstrações que implementam a ideia de iterações. Por exemplo, os ciclos for...of, as funções de array como o forEach, e até mesmo o protocolo de iterações incorporado no JavaScript, seguem a filosofia do Padrão de Iterações.

## Pontos Positivos Padrão de Iterador

### Visualização da Estrutura Interna Abstraída
O Padrão Iterator possibilita a exploração de coleções sem revelar detalhes internos da estrutura de dados. Isso é benéfico para garantir a integridade da coleção e diminuir a ligação entre os componentes do sistema.

### Flexibilidade na Iteração
Com um iterador, podemos executar ações personalizadas, tais como filtros, ordenações ou iterações condicionais, sem alterar a estrutura da coleção original.

## Pontos Negativos Padrão de Iterador

### Sobrecarregar Implementação
Em situações simples, a implementação de iteradores personalizados pode ser excessivamente complicada, principalmente em linguagens que já têm abstrações incorporadas para iteração.

### Potencialmente Causar Impacto no Desempenho
Em situações onde a coleção é extensa ou a lógica de iteração é intrincada, a utilização de iteradores pode resultar em sobrecarga de processamento ou memória, particularmente em sistemas que necessitam de alta performance.