package project.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/default-html-reports"},
        glue = "project/step_def",
        features = "src/test/resources/features",
        monochrome = true
)
public class CucumberRunner {
}

