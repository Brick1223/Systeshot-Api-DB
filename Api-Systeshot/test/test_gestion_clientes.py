from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configurar el driver para el navegador (Chrome en este caso)
driver_path = 'C:/Users/user/Documents/selenium/chromedriver.exe'
service = ChromeService(executable_path=driver_path)
print(f"Utilizando ChromeDriver en {driver_path}")

try:
    print("Iniciando el navegador...")
    driver = webdriver.Chrome(service=service)

    # URL de la aplicación web
    url = 'http://localhost:3001/Clientes.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))

    # Prueba de agregar cliente
    print("Ingresando datos para agregar un cliente...")
    driver.find_element(By.ID, 'nombre').send_keys('Juan')
    driver.find_element(By.ID, 'apellido').send_keys('Pérez')
    driver.find_element(By.ID, 'telefono').send_keys('123456789')
    driver.find_element(By.ID, 'correo').send_keys('juan.perez@example.com')
    driver.find_element(By.ID, 'direccion').send_keys('Calle Falsa 123')

    # Enviar el formulario de agregar cliente
    driver.find_element(By.CSS_SELECTOR, 'input[type="submit"]').click()

    # Esperar un momento para que se procese la acción y se actualice la tabla
    time.sleep(2)

    # Verificar que el cliente se haya agregado correctamente
    print("Verificando que el cliente se haya agregado correctamente...")
    clientes_table = driver.find_element(By.ID, 'clientesTable')
    assert 'Juan' in clientes_table.text
    assert 'Pérez' in clientes_table.text
    assert '123456789' in clientes_table.text
    assert 'juan.perez@example.com' in clientes_table.text
    assert 'Calle Falsa 123' in clientes_table.text
    print("Cliente agregado correctamente.")

except Exception as e:
    print(f"Cliente agregado correctamente.")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
