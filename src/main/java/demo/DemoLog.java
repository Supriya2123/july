package demo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class DemoLog {
	static Logger logger=LogManager.getLogger(DemoLog.class.getName());
	public static void log4j(int i)
	{
		if(i==1)
		{
			logger.info("started the test");
		}
		else if(i==2)
		{
			logger.info("stopping the test");
		}
		else if(i==3)
		{
			logger.trace("tracking");
		}
		else if(i==4)
		{
			logger.error("Error");
		}
		else if(i==5)
		{
			logger.fatal("Fatal Error");
		}
	}

}