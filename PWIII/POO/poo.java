public class poo {
    int rodas;
    int portas;
    String cor;
    String marca;
    String modelo;
    String placa;
    String acessorios;
    public poo(int rodas, int portas, String cor, String marca, String modelo, String placa, String acessorios){
        this.rodas = rodas;
        this.portas = portas;
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.acessorios = acessorios;
    }
    public static void main(String[] args) {
        poo carro = new poo(4, 4, "Azul", "Volkswagen", "SpaceFox", "BRA2E19", "Ar Condicionado, Trava Elétrica");
        System.out.println(carro);
    }
}