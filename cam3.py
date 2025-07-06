import cv2
import face_recognition

# Iniciar la cámara
video_capture = cv2.VideoCapture(1)
print("🎥 Cámara activada. Presiona 'q' para salir.")

while True:
    ret, frame = video_capture.read()

    if not ret:
        print("🚫 Error al capturar el frame.")
        break

    # Convertir el frame de BGR (OpenCV) a RGB (face_recognition)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Detectar ubicaciones de rostros
    face_locations = face_recognition.face_locations(rgb_frame)
    print(f"[✅] Detectados {len(face_locations)} rostro(s).")

    # Dibujar rectángulos sobre los rostros detectados
    for (top, right, bottom, left) in face_locations:
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)

    # Mostrar el resultado en una ventana
    cv2.imshow('Face Detection', frame)

    # Salir si el usuario presiona 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar la cámara y cerrar ventanas
video_capture.release()
cv2.destroyAllWindows()
