import face_recognition
import cv2
import numpy as np

# Iniciar la webcam
video_capture = cv2.VideoCapture(1)

print("🎥 Cámara activada. Presiona 'q' para salir.")

frame_counter = 0  # Para controlar cada 10 frames

while True:
    ret, frame = video_capture.read()
    if not ret:
        print("❌ No se pudo leer el frame")
        break

    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
    rgb_small_frame = small_frame[:, :, ::-1]

    face_locations = face_recognition.face_locations(rgb_small_frame)

    if face_locations:
        print(f"[✅] Detectados {len(face_locations)} rostro(s).")

    # Calcular vectores faciales
    face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

    for i, (top, right, bottom, left) in enumerate(face_locations):
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4

        print(f"📍 Rostro {i+1} - Coordenadas: top={top}, right={right}, bottom={bottom}, left={left}")
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        cv2.putText(frame, f"Rostro {i+1}", (left, top - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

        # Solo imprimimos los vectores cada 10 frames
        if frame_counter % 10 == 0 and i < len(face_encodings):
            vector = face_encodings[i]
            print(f"🧠 Vector facial de Rostro {i+1} (128D):")
            print(f"   Primeros 10: {vector[:10]}")
            print(f"   Últimos 10:  {vector[-10:]}")
            print(f"   Norma: {np.linalg.norm(vector):.4f}")
            print("-" * 50)

    frame_counter += 1

    cv2.imshow('🎥 Detección en Vivo - Webcam', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video_capture.release()
cv2.destroyAllWindows()
