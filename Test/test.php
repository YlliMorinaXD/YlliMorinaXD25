<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $quantity = htmlspecialchars($_POST["quantity"]);
    echo "<h2>Faleminderit për porosinë tuaj!</h2>";
    echo "<p>Keni porositur <strong>$quantity</strong> kufje HyperX Cloud III.</p>";
    echo "<a href='index.html'>Kthehu te faqja</a>";
} else {
    header("Location: index.html");
    exit();
}
?>
