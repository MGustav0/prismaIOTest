-- CreateTable
CREATE TABLE "courses_models" (
    "id" TEXT NOT NULL,
    "fk_id_course" TEXT NOT NULL,
    "fk_id_module" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coursesId" TEXT NOT NULL,

    CONSTRAINT "courses_models_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_models_fk_id_course_key" ON "courses_models"("fk_id_course");

-- CreateIndex
CREATE UNIQUE INDEX "courses_models_fk_id_module_key" ON "courses_models"("fk_id_module");

-- AddForeignKey
ALTER TABLE "courses_models" ADD CONSTRAINT "courses_models_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_models" ADD CONSTRAINT "courses_models_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
