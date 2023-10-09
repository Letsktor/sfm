module org.example {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.persistence;
    requires com.h2database;
    requires java.sql;

    opens org.example to javafx.fxml;
    exports org.example;
}