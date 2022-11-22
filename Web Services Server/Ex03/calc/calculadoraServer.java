package calc;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

// SEI - Service Endpoint Interface


@WebService
//@Webservice é uma anotação que avisa ao compilador Java que o arquivo atual corresponde
// à definição SEI de um serviço Web.

//@SOAPBinding indica que o serviço utilizará a abordagem SOAP e não Rest que
// é a outra abordagem suportada.
@SOAPBinding(style = Style.RPC)
public interface calculadoraServer {
  //@WebMethod indica que um determinado método corresponde a uma operação de serviço
  // e assim pode ser invocado por um cliente.
  @WebMethod float soma(float num1, float num2);
  @WebMethod float subtracao(float num1, float num2);
  @WebMethod float multiplicacao(float num1, float num2);
  @WebMethod float divisao(float num1, float num2);
}