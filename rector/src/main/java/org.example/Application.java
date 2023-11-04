package org.example;
import org.example.Animal;
import org.h2.tools.Server;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.sql.SQLException;

public class Application {
    public static void main(String[] args)throws SQLException{

        startDatabase();

        final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("br.com.fredericci.pu");
        final EntityManager entityManager = entityManagerFactory.createEntityManager();

        Animal animal = new Animal();
        animal.setName("Zold");
        animal.setSpecies("karaj");
        animal.setRate(4.5);
        entityManager.getTransaction().begin();
        entityManager.persist(animal);
        entityManager.getTransaction().commit();

        System.out.println("Open your browser and navigate to http://localhost:8082/");
        System.out.println("JDBC URL: jdbc:h2:mem:my_database");
        System.out.println("User Name: sa");
        System.out.println("Password: ");

    }

    private static void startDatabase() throws SQLException {
        new Server().runTool("-tcp", "-web", "-ifNotExists");
    }
}


