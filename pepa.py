##No TOCAR PTMR

import face_recognition
import cv2

# Iniciar la webcam (0 es la cámara por defecto)
video_capture = cv2.VideoCapture(1)

print("🎥 Cámara activada. Presiona 'q' para salir.")

while True:
    # Leer frame por frame
    ret, frame = video_capture.read()

    # Reducir el tamaño para mejorar velocidad (opcional)
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    # Convertir BGR (OpenCV) a RGB (face_recognition)
    rgb_small_frame = small_frame[:, :, ::-1]

    # Detectar rostros
    face_locations = face_recognition.face_locations(rgb_small_frame)

    # Dibujar recuadros en los rostros detectados
    for (top, right, bottom, left) in face_locations:
        # Escalar de regreso al tamaño original
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)

    # Mostrar el frame con detección
    cv2.imshow('🎥 Detección en Vivo - Webcam', frame)

    # Salir si presionas 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar la cámara y cerrar ventana
video_capture.release()
cv2.destroyAllWindows()
