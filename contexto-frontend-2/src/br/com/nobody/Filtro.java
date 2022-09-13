package br.com.nobody;



import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebFilter("/*")
public class Filtro implements Filter {

   public void destroy() {
   }

   public void doFilter(ServletRequest requ, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

      HttpServletRequest request = (HttpServletRequest) requ;
      HttpServletResponse response = (HttpServletResponse) resp;
      final String requestURI = request.getRequestURI();

      if (requestURI.contains(".")) {
         chain.doFilter(requ, resp);
         return;
      }
      
      request.getRequestDispatcher("/index.html").forward(request, response);
      return;
   }

   public void init(FilterConfig config) throws ServletException {
   }
}

