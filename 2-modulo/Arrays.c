
#include <stdio.h>
#include <stdlib.h>

int main(void) {
        /* Aqui acredito que eu consegui aplicar o Realloc, o Sizeof e o free(), porém não consegui 'validar' se o usuário digita realmente 22 na definição do tamanho do vetor
        */
        int *arr;
        int n;
        
        printf("Digite 22 e então aperte ENTER para inicializar um vetor com 22 posições:\n\n");
        scanf("%d", &n);
        
        arr = (int *) malloc(n * sizeof(int));
        
        if(!arr){
            printf("[ERRO], Reinicie o programa e quando solicitado digite\n o valor 22 para continuar com o código corretamente.");
            return 1;
        }
        for(int i = 0; i < n; i++){
            arr[i] = i;
        }
        for(int i = 0; i < n; i++){
            printf("%d\n",arr[i] = i);
        }
        
        free(arr);
        
        printf("O seu Vetor ocupa: %d bytes\n", sizeof(arr));
        
        
       
        
        
        
    return 0;
}
   /*
    Aqui eu consegui forçar o vetor a ter 22 posições porém não consegui aplicar o free() nem o realloc;
    
    float vetor[22] = {4, 3, 21, 34, 5, 7, 9, 8, 445, 11, 12, 32, 34, 122, 65, 76, 45, 89, 90, 200, 65, 22};
    int i;
        printf("Exibindo os valores do Vetor \n\n");
        for(i = 0; i <= 21; i++){
           printf("Vetor[%d] = %.f\n",i, vetor[i]);
        }
        printf("O seu Vetor ocupa: %d bytes\n", sizeof(vetor));
        */


/*
#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, tam = 6;
    char *nome;
    
    nome = (char *) malloc(tam *sizeof(char));
    
    nome = "Felipe";
    printf("\n\t%s", nome);
    
    
    nome = (char *) realloc(NULL, 22 * sizeof(char));
    
    nome = "Felipe Floriano com22";
    printf("\n\t%s", nome);
   
        nome = malloc (tam * sizeof(char)) ;
        free (nome) ;
        nome = NULL ;  
        
    printf("\n\n\nO seu Vetor ocupa: %d bytes\n", sizeof(nome));
    printf("\n\n");
    return 0;
}*/


/*

#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, tam = 6;
    char *nome;
    
    nome = (char *) malloc(tam *sizeof(char));
    
    nome = "Felipe";
    printf("\n\t%s", nome);
    
    
    nome = (char *) realloc(NULL, 22 * sizeof(char));
    
    nome = "Felipe Floriano com22";
    printf("\n\t%s", nome);
   
    free(nome);
    
    printf("\n\n");
    return 0;
}*/