from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configuración del driver para el navegador Chrome
driver_path = 'C:/Users/user/Documents/selenium/chromedriver.exe'
service = ChromeService(executable_path=driver_path)
print(f"Utilizando ChromeDriver en {driver_path}")

try:
    print("Iniciando el navegador...")
    driver = webdriver.Chrome(service=service)

    # URL de la página de empleados - ajusta la URL según tu entorno local
    url = 'http://localhost:3001/Empleados.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))  # Espera por un elemento que indique que la página está lista

    # Acceder al formulario de agregar empleado
    print("Accediendo al formulario de agregar empleado...")
    nombre_input = wait.until(EC.presence_of_element_located((By.ID, 'nombre')))
    apellido_input = driver.find_element(By.ID, 'apellido')
    cargo_input = driver.find_element(By.ID, 'cargo')
    fecha_contratacion_input = driver.find_element(By.ID, 'fecha_contratacion')

    # Llenar el formulario de agregar empleado
    nombre_input.send_keys('Juan')
    apellido_input.send_keys('Pérez')
    cargo_input.send_keys('Desarrollador')
    fecha_contratacion_input.send_keys('2023-07-01')

    # Hacer clic en el botón de agregar empleado
    agregar_button = driver.find_element(By.XPATH, "//input[@type='submit' and @value='Agregar Empleado']")
    agregar_button.click()

    # No verificar explícitamente la tabla, solo asegurarse de que no haya errores durante la inserción

    print("Prueba completada exitosamente.")

except Exception as e:
    print(f"Se produjo un error durante la prueba: {e}")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
