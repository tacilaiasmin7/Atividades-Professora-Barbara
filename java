public class primeiroprograma {

public static void main(String[] args) throws InterruptedException {

    int bateria = 20;

    if (bateria >=50) {
for (int i= 1; i <=5; i++) {
        

        switch (i) {
        
        

        case 1:
                System.out.println("O carro foi iniciado!");
                Thread.sleep (3000);
                break;
            
            
       case 2:
                System.out.println("Os sensores foram ativados!");
                 Thread.sleep (3000);
                 break;
            
        
       case 3:
                 System.out.println("O modo autônomo foi ligado!");
                  Thread.sleep (3000);
                  break;
            

        case 4: 
            System.out.println("A rota está sendo calculada...");
             Thread.sleep (3000);
                break;
            


        case 5: System.out.println("Bateria em" +bateria+  "%");
         System.out.println("O trajeto será iniciado!");
         Thread.sleep (3000);
                break;
    }
    }  }    
      else { 
    System.out.println("Bateria insuficiente para iniciar o trajeto");}
  
    }
}
